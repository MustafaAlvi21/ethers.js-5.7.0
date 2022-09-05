import { Coder } from "./abstract-coder.js";
import type { Reader, Writer } from "./abstract-coder.js";
export declare class DynamicBytesCoder extends Coder {
    constructor(type: string, localName: string);
    defaultValue(): string;
    encode(writer: Writer, value: any): number;
    decode(reader: Reader): any;
}
export declare class BytesCoder extends DynamicBytesCoder {
    constructor(localName: string);
    decode(reader: Reader): any;
}
//# sourceMappingURL=bytes.d.ts.map