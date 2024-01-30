module.exports = ({image})=>{
    const today = new Date()
    return `
    <body>
        Date of Invoice: ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}
        <div>
        Email: ${`${image}`}
        </div>
    </body>`
}