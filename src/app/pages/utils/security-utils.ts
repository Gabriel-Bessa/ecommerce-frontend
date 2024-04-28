export class SecurityUtils {
    public static ROLE_MASTER = "ROLE_MASTER";

    public static getToken(): string {
        var token = window.localStorage.getItem("token");
        return  token ? token : "";
    }

    public static setToken(token: string) {
       window.localStorage.setItem("token", token);
    }

    public static clearToken() {
        window.localStorage.removeItem("token");
    }

    public static cleanRoles(){
        window.localStorage.removeItem("roles");
    }

    public static getRoles(): any {
        const user = JSON.parse(localStorage.getItem('user') ?? "");
        if (user == null) {
            return [];
        }
        return user.roles;
    }

    public static hasToken(): boolean {
        return this.getToken() != "";
    }

    public static hasRole(name: string) {
        return this.getRole().includes(name) || this.getRole().includes(this.ROLE_MASTER);
    }

    public static hasRoleNoMaster(name: string) {
        if (!name) {
            return true;
        }
        return this.getRole().includes(name);
    }

    private static getRole() {
        let roles = SecurityUtils.getRoles();
        return roles ? roles : [];
    }

    static isAuth() {
        return this.hasToken();
    }
}
