
class User {
    name: string
    email: string
    password: string
    phone: string
    constructor(name: string, email: string, password: string, phone: string) {
        this.name = name
        this.email = email
        this.password = password
        this.phone = phone
    }
    async userSignup(): Promise<string> {
        const response = await fetch(process.env.REACT_APP_API_URL + 'login/signup', {
            method: 'POST',
            body: JSON.stringify(this),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        if (response.status === 200)
            return 'sucess'
        return ''
    }
    static async userLogin(userName: string, Password: string): Promise<string> {
        const response = await fetch(process.env.REACT_APP_API_URL + 'login/signup', {
            method: 'POST',
            body: JSON.stringify({
                user: userName,
                pass: Password
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const body = await response.text()
        console.log(body)
        if (response.status === 200)
            return 'sucess'
        return ''
    }
}

export { User }