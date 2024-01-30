module.exports = ({email})=>{
    const today = new Date()
    return `
    <body>
        Date of Invoice: ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}
        <div>
        Email: ${`${email}`}
        </div>
    </body>`
}