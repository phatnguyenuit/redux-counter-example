import { Action } from 'redux';

export interface PayloadAction<TPayload = any> extends Action<string> {
  payload: TPayload;
}
