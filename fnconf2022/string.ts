
type IsUrl<s extends string> = s extends `https://${infer u}.${infer v}` ? true : false

type Zoho = 'https://zoho.com'

type test0 = IsUrl<Zoho>

type GetDomain<s extends string> = s extends `https://${infer u}.${infer v}` ? u : false

type test1 = GetDomain<Zoho>

// As powerfull as regular expressions

type Balance<X extends string> =  X extends  '' ?  true : X extends `(${infer V})` ? Balance<V> : false

type test2 = Balance<'((()))'>

// We can encode grammar rules too...

type Operators = '+' | '-' | '*' | '/'

type BalanceGrammar<X extends string> = 
        X extends '' ? true :
        X extends `(${infer A})${Operators}(${infer B})` ? BalanceGrammar<A> & BalanceGrammar<B> :
        X extends `(${infer U})` ? BalanceGrammar<U> :
        false

type test3 = BalanceGrammar<'(())+(())'>