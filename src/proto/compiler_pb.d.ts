// package: 
// file: compiler.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class EmailCompilerRequest extends jspb.Message { 
    getSourcetemplate(): string;
    setSourcetemplate(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmailCompilerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EmailCompilerRequest): EmailCompilerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmailCompilerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmailCompilerRequest;
    static deserializeBinaryFromReader(message: EmailCompilerRequest, reader: jspb.BinaryReader): EmailCompilerRequest;
}

export namespace EmailCompilerRequest {
    export type AsObject = {
        sourcetemplate: string,
    }
}

export class EmailCompilerResponse extends jspb.Message { 
    getCompiledtemplate(): string;
    setCompiledtemplate(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmailCompilerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EmailCompilerResponse): EmailCompilerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmailCompilerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmailCompilerResponse;
    static deserializeBinaryFromReader(message: EmailCompilerResponse, reader: jspb.BinaryReader): EmailCompilerResponse;
}

export namespace EmailCompilerResponse {
    export type AsObject = {
        compiledtemplate: string,
    }
}
