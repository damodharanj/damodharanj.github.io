
type Matrix<X, R, C> = {
    value: List<List<X, R>, C>
}

declare function multiply<X, R1, C1, R2, C2>(m1: Matrix<X, R1, C1>, m2: Matrix<X, C1, R1>): Matrix<X, R1, R1>

// 3 x 2
declare let m1: Matrix<number, _3, _2>

// 2 x 3
declare let m2: Matrix<number, _2, _3>

// 3 x 2 . 2 x 3 = 3 x 3
const m = multiply(m1, m2)

// m.value.next.next.next.value.next.next.next.value

// const m4 = multiply(m1, m)














type List<X, N> =
    N extends 0 ? {value: X, len: 0} :
    { value: X, next: List<X, Dec<N>>, len: N }

declare function append<X, N>(a: X, l: List<X, N>): List<X, Inc<N>>

declare let x2: List<number, _3>;

// const x1 = append(1, x2) //.next

// ======

declare function concat<X, M, N>(l1: List<X, M>, l2: List<X, N>): List<X, Add<M, N>>;

declare let l1: List<number, _2>

declare let l2: List<number, _3>

// const u = concat(l1, l2)  //.next



// function concat<X, M, N>(l1: List<X, M>, l2: List<X, N>): List<X, Add<M, N>> {
//     if (l1.len !== 0) {
//         return concat(l1, l2);
//     }
//     return {} as any;
// }

// function append<X, N>(a: X, l: List<X, N>): List<X, Inc<N>> {
//     return { value: a, next: l as any, len: {len: l.len} as any } as List<X, Inc<N>>;
// }

type _1 = Succ<Zero>
type _2 = Succ<_1>
type _3 = Succ<_2>
type _4 = Succ<_3>
type _5 = Succ<_4>
type _6 = Succ<Succ<_4>>
type _12 = Mul<_3, _4>

// Inductive definition

type Zero = 0

type Succ<T> =
    T extends Zero ? { len: T } : { len: T }

type Dec<T> = 
    T extends Zero ? Zero :
    T extends {len: any} ? T['len'] : T

type Inc<T> = 
    T extends Zero ? Zero :
    T extends {len: any} ? {len: T} : {len: T}

// Recursion comes to rescuse
type Add<X, Y> =
    Y extends Zero ? X :
    X extends Zero ? Y :
    { len: Add<Dec<X>, Y> }

type One = Succ<Zero>

type Mul<X, Y> = 
    X extends Zero ? Zero :
    Y extends Zero ? Zero :
    Y extends One ? X :
    { len: Dec<Add<X, Mul<X, Dec<Y>>>> }

type Diff<X extends { len: any }, Y> =
    X extends Y ? 0 :
    Y extends 0 ? X :
    X extends 0 ? Y :
    { len: Dec<Diff<X['len'], Dec<Y>>> }