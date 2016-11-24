import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

export class BaseService {
    private _headers = new Headers({ 'Content-Type': 'application/json' });

    protected _baseUrl: string = '/api';
    
    protected _options = new RequestOptions({ headers: this._headers });
    protected handleError(error: Response)
    {
        console.log(error);
        return Observable.throw(error || error.json().error || 'Server error');
    }
}