import './Contact.css'

export default function Contact () {
    return (
        <>
            
                    <div className="book-an-Appointment">
                        <div className="continer">
                        
                            <form action="">
                                <input type="text" placeholder="Name"/>
                                <input type="email" placeholder="Email"/>
                                <input type="text" placeholder="phone"/>
                                <select name="" id="">
                                    <option value="">Department</option>
                                    <option value="">Cardiac Clinic</option>
                                    <option value="">Neurology</option>
                                    <option value="">Dentistry</option>
                                    <option value="">Gastroenterology</option>
                                </select>
                                <select name="" id="">
                                    <option value="">Doctor</option>
                                    <option value="">Dr.Akther Hossain</option>
                                    <option value="">Dr.Dery Alex</option>
                                    <option value="">Dr.jovis Karon</option>
                                </select>
                                <input type="date" placeholder="Date"/>
                                <textarea name="" id="" placeholder="write Ypur Massage Here"></textarea>
                                <input type="submit" value={"Submit"}/>
                                <span>( We will be confirm by an Text Message )</span>
                            </form>
                            <div className="image"></div>
                        </div>
                    </div>
        </>
    )
}