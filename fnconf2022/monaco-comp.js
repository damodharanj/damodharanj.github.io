import {packd_export_0} from 'https://srv.divriots.com/packd/lit,lit-html@next-major';
const {html, css, LitElement} = packd_export_0;
;
class MyCounter extends LitElement {
    static get styles() {
        return css`
      * {
        font-size: 200%;
      }

      span {
        width: 4rem;
        display: inline-block;
        text-align: center;
      }

      button {
        width: 4rem;
        height: 4rem;
        border: none;
        border-radius: 10px;
        background-color: seagreen;
        color: white;
      }`;
    }

    static get properties() {
        return {
            code: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.mid = 'monaco-' + Math.ceil(Math.random() * 100);

        if (window.main && window.sandBoxFactory) {
            this.initEditor({
                main: window.main,
                sandBoxFactory: window.sandBoxFactory
            });
            console.log('main is here!!', this.mid);
        } else {
            console.log('No main', this.mid);
            const p = this.init().then((main,sandBoxFactory)=>{
                this.initEditor(main, sandBoxFactory);
            }
            );
            window.loaded = p;
        }
    }

    createRenderRoot() {
        return this;
    }

    init() {
        let resolve;
        let reject;
        const p = new Promise((res,rej)=>{
            resolve = res;
            reject = rej;
        }
        );
        const getLoaderScript = document.createElement('script');
        getLoaderScript.src = 'https://www.typescriptlang.org/js/vs.loader.js';
        getLoaderScript.async = true;

        getLoaderScript.onload = ()=>{
            // Now the loader is ready, tell require where it can get the version of monaco, and the sandbox
            // This version uses the latest version of the sandbox, which is used on the TypeScript website
            // For the monaco version you can use unpkg or the TypeSCript web infra CDN
            // You can see the available releases for TypeScript here:
            // https://typescript.azureedge.net/indexes/releases.json
            //
            require.config({
                paths: {
                    vs: 'https://typescript.azureedge.net/cdn/4.0.5/monaco/min/vs',
                    // vs: 'https://unpkg.com/@typescript-deploys/monaco-editor@4.0.5/min/vs',
                    sandbox: 'https://www.typescriptlang.org/js/sandbox'
                },
                // This is something you need for monaco to work
                ignoreDuplicateModules: ['vs/editor/editor.main']
            });
            // Grab a copy of monaco, TypeScript and the sandbox

            require(['vs/editor/editor.main', 'vs/language/typescript/tsWorker', 'sandbox/index'], (main,_tsWorker,sandboxFactory)=>{
                if (!window.main) {
                    window.main = main;
                    window.sandboxFactory = sandboxFactory;
                }

                resolve({
                    main,
                    sandboxFactory
                });
            }
            );
        }
        ;

        document.body.appendChild(getLoaderScript);
        return p;
    }

    initEditor(obj) {
        const initialCode = this.code;
        const {main, sandboxFactory} = obj;
        const isOK = main && window.ts && sandboxFactory;

        if (isOK) {
            const l = this.querySelector('.loader');
            l.parentNode.removeChild(l);
        } else {
            console.error('Could not get all the dependencies of sandbox set up!', obj, main, sandboxFactory);
            // console.error('main', !!main, 'ts', !!window.ts, 'sandbox', !!sandbox)

            return;
        }
        // Create a sandbox and embed it into the the div #monaco-editor-embed

        const sandboxConfig = {
            text: initialCode,
            compilerOptions: {},
            domID: this.mid
        };
        const sandbox = sandboxFactory.createTypeScriptSandbox(sandboxConfig, main, window.ts);
        console.log(sandbox);
        sandbox.editor.focus();
        sandbox.editor.onDidChangeModelContent((a,b,c)=>{
            sandbox.getRunnableJS().then(js=>{
                this.querySelector('.output').innerText = js;
                // output.innerText = js;
            }
            );
        }
        );
        sandbox.getRunnableJS().then(js=>{// output.innerText = js;
        }
        );
    }

    render() {
        return html`
      <div class="loader">Loading...</div>
      <div style="display: flex; width: 600px; height: 100%">
        <div id="${this.mid}" style="width: 50%"></div>
        <div class="output" style="font-family: menlo; width: 50%"></div>
    </div>
    `;
    }

}

window.customElements.define('my-counter', MyCounter);