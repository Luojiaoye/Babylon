import { Signal1 } from '../signals/Signal1';
import { ITickProvider } from './ITickProvider';
export declare class RAFTickProvider extends Signal1<number> implements ITickProvider {
    private rafId;
    private previousTime;
    start(): void;
    private update;
    stop(): void;
    readonly playing: boolean;
}
