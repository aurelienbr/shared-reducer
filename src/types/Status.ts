export const STATUS_START = 'start';
export const STATUS_LOADING = 'loading';
export const STATUS_SUCCESS = 'success';
export const STATUS_FAILURE = 'failure';

export type Status = typeof STATUS_START | typeof STATUS_LOADING | typeof STATUS_SUCCESS | typeof STATUS_FAILURE;
