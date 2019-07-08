// package: 
// file: compiler.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as compiler_pb from "./compiler_pb";

interface IEmailCompilerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    compile: IEmailCompilerService_ICompile;
}

interface IEmailCompilerService_ICompile extends grpc.MethodDefinition<compiler_pb.EmailCompilerRequest, compiler_pb.EmailCompilerResponse> {
    path: string; // "/.EmailCompiler/Compile"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<compiler_pb.EmailCompilerRequest>;
    requestDeserialize: grpc.deserialize<compiler_pb.EmailCompilerRequest>;
    responseSerialize: grpc.serialize<compiler_pb.EmailCompilerResponse>;
    responseDeserialize: grpc.deserialize<compiler_pb.EmailCompilerResponse>;
}

export const EmailCompilerService: IEmailCompilerService;

export interface IEmailCompilerServer {
    compile: grpc.handleUnaryCall<compiler_pb.EmailCompilerRequest, compiler_pb.EmailCompilerResponse>;
}

export interface IEmailCompilerClient {
    compile(request: compiler_pb.EmailCompilerRequest, callback: (error: grpc.ServiceError | null, response: compiler_pb.EmailCompilerResponse) => void): grpc.ClientUnaryCall;
    compile(request: compiler_pb.EmailCompilerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: compiler_pb.EmailCompilerResponse) => void): grpc.ClientUnaryCall;
    compile(request: compiler_pb.EmailCompilerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: compiler_pb.EmailCompilerResponse) => void): grpc.ClientUnaryCall;
}

export class EmailCompilerClient extends grpc.Client implements IEmailCompilerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public compile(request: compiler_pb.EmailCompilerRequest, callback: (error: grpc.ServiceError | null, response: compiler_pb.EmailCompilerResponse) => void): grpc.ClientUnaryCall;
    public compile(request: compiler_pb.EmailCompilerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: compiler_pb.EmailCompilerResponse) => void): grpc.ClientUnaryCall;
    public compile(request: compiler_pb.EmailCompilerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: compiler_pb.EmailCompilerResponse) => void): grpc.ClientUnaryCall;
}
