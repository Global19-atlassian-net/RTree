import RectLike from './rect-like';
export default class Rectangle {
    private _x;
    private _y;
    private _w;
    private _h;
    private _x2;
    private _y2;
    constructor(ix: RectLike | number, iy?: number, iw?: number, ih?: number);
    readonly x: number;
    readonly y: number;
    readonly w: number;
    readonly h: number;
    readonly x2: number;
    readonly y2: number;
    toJSON(): string;
    overlap(a: RectLike): boolean;
    expand(a: RectLike): Rectangle;
    static squarified_ratio(l: number, w: number, fill: number): number;
    static overlap_rectangle(a: RectLike, b: RectLike): boolean;
    static contains_rectangle(a: RectLike, b: RectLike): boolean;
    static expand_rectangle(a: RectLike, b: RectLike): RectLike;
    static make_MBR(nodes: RectLike[], rect: RectLike): RectLike;
}
