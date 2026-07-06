import * as circuit_json_to_gltf from 'circuit-json-to-gltf';
import { AnyCircuitElement } from 'circuit-json';

type CameraOptions = {
    camPos: readonly [number, number, number];
    lookAt: readonly [number, number, number];
    fov: number;
};
declare const CAMERA_PRESETS: {
    readonly "top-down": (cam: CameraOptions) => CameraOptions;
    readonly "top-down-ortho": (cam: CameraOptions) => CameraOptions;
    readonly "top-left-corner": (cam: CameraOptions) => CameraOptions;
    readonly "top-left": (cam: CameraOptions) => CameraOptions;
    readonly "top-right-corner": (cam: CameraOptions) => CameraOptions;
    readonly "top-right": (cam: CameraOptions) => CameraOptions;
    readonly "left-sideview": (cam: CameraOptions) => CameraOptions;
    readonly "right-sideview": (cam: CameraOptions) => CameraOptions;
    readonly front: (cam: CameraOptions) => CameraOptions;
    readonly "top-center-angled": (cam: CameraOptions) => CameraOptions;
};
type CameraPreset = keyof typeof CAMERA_PRESETS;
declare const CAMERA_PRESET_NAMES: CameraPreset[];
declare function applyCameraPreset(preset: CameraPreset, cam: CameraOptions): CameraOptions;

type ConvertCircuitJsonTo3dGltfResult = Awaited<ReturnType<typeof circuit_json_to_gltf["convertCircuitJsonToGltf"]>>;
type CircuitJson3dBaseOptions = {
    modelPathBaseDir?: string;
    projectBaseUrl?: string;
    authHeaders?: {
        Authorization: string;
    };
    boardTextureResolution?: number;
};
type RenderCircuitJsonTo3dPngOptions = CircuitJson3dBaseOptions & {
    camera?: CameraOptions;
    cameraPreset?: CameraPreset;
    width?: number;
    height?: number;
    backgroundColor?: string | readonly [number, number, number] | null;
    showInfiniteGrid?: boolean;
    supersampling?: number;
};
declare const getDefaultCameraForCircuitJson: (circuitJson: AnyCircuitElement[]) => Promise<CameraOptions>;
declare const convertCircuitJsonTo3dGltf: (circuitJson: AnyCircuitElement[], options?: CircuitJson3dBaseOptions) => Promise<ConvertCircuitJsonTo3dGltfResult>;
declare const convertCircuitJsonTo3dGlb: (circuitJson: AnyCircuitElement[], options?: CircuitJson3dBaseOptions) => Promise<Uint8Array>;
declare const renderCircuitJsonTo3dPng: (circuitJson: AnyCircuitElement[], options?: RenderCircuitJsonTo3dPngOptions) => Promise<Uint8Array>;

export { CAMERA_PRESET_NAMES, type CameraOptions, type CameraPreset, type CircuitJson3dBaseOptions, type ConvertCircuitJsonTo3dGltfResult, type RenderCircuitJsonTo3dPngOptions, applyCameraPreset, convertCircuitJsonTo3dGlb, convertCircuitJsonTo3dGltf, getDefaultCameraForCircuitJson, renderCircuitJsonTo3dPng };
