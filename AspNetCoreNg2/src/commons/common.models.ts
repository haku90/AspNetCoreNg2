export interface RestResponse<T> {
    isSuccess: boolean;
    errorMessage: string;
    data: T;
}
