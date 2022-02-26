export interface Response {
    ok:    boolean;
    bills: Bill[];
}

export interface ChangeStatus {
    ok:       boolean;
    response: StatusResponse;
}

export interface Bill {
    _id:           string;
    CodigoFactura: string;
    Cliente:       string;
    Ciudad:        string;
    NIT:           string;
    TotalFactura:  number;
    SubTotal:      number;
    Iva:           number;
    Retencion:     number;
    FechaCreacion: string;
    Estado:        string;
    Pagada:        boolean;
    FechaPago:     string;
    email: string;
}

export interface  StatusResponse {
    _id:           string;
    CodigoFactura: string;
    Cliente:       string;
    Ciudad:        string;
    NIT:           string;
    TotalFactura:  number;
    SubTotal:      number;
    Iva:           number;
    Retencion:     number;
    FechaCreacion: string;
    Estado:        string;
    Pagada:        boolean;
    FechaPago:     string;
    email: string;
}
