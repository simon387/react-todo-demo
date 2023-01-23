import {Shape} from "./Shape";

export class Rectangle extends Shape{
	constructor(_x: number, _y: number, private _width: number, private _length: number) {
		super(_x, _y);
	}

	get width(): number {
		return this._width;
	}

	set width(value: number) {
		this._width = value;
	}

	get length(): number {
		return this._length;
	}

	set length(value: number) {
		this._length = value;
	}

	public getInfo(): string {
		return super.getInfo() + `, width=${this._width}, length=${this._length}`;
	}
}