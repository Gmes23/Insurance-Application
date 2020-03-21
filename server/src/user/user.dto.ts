export interface UserDTO {
    readonly first_name: string;
    readonly last_name: string;
    readonly email_address: string;
    readonly phone_number: string;
    readonly company_name: string;
    readonly effective_date: string;
    readonly status: string;
    readonly primary_al: boolean;
    readonly primary_gl: boolean;
    readonly primary_el: boolean;
}