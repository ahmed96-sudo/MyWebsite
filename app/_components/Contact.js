'use client'
import { useEffect } from "react"

const Contact = () => {
    useEffect(() => {
        let form = document.getElementById('formcon');
        form.addEventListener('submit', function (e) {
            e.preventDefault()
            let name = document.getElementById('name').value;
            let senderemail = document.getElementById('senderemail').value;
            let subject = document.getElementById('subject').value;
            let msg = document.getElementById('msg').value;
            if (name === '' || senderemail === '' || subject === '' || msg === '') {
                alert('Please fill all the fields')
                return false;
            }
            let data = {
                name: name,
                senderemail: senderemail,
                subject: subject,
                msg: msg
            }
            fetch('/api/contactform', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })
                .then(res => res.json())
                .then(res => {
                    if (res.status === 'success') {
                        alert('Thanks for contacting us, we will get back to you soon!');
                        document.getElementById('name').value = '';
                        document.getElementById('senderemail').value = '';
                        document.getElementById('subject').value = '';
                        document.getElementById('msg').value = '';
                    } else if (res.status === 'fail') {
                        alert("We can't submit the form, try again later?")
                    } else if (res.status ===  "notfill") {
                        alert('Please fill all the fields')
                        return false;
                    }
                })
        });
    }, [])
    return (
        <section className="h-[600px] w-[60%] flex flex-col justify-center items-center m-auto max-[768px]:w-full">
            <h1 className="text-[55px] font-[800] text-[#4831d4] max-md:text-[50px] max-[768px]:mb-[20px]">Get In Touch</h1>
            <form id="formcon" className="w-[80%] max-md:w-[90%]">
                <div className="flex justify-between w-full mb-[10px]">
                    <div className="flex flex-col w-1/2">
                        <label className='text-[17px] text-[#3d155f]'>Name(<span className='text-red-600'>*</span>)</label>
                        <input id="name" className='w-[95%] rounded-[3px] pl-[20px] h-[45px] mt-[10px] text-[#4831d4] bg-transparent border-b border-b-[#999]' type="text" placeholder='Name' required maxLength={20} />
                    </div>
                    <div className="flex flex-col w-1/2 items-end">
                        <label className='text-[17px] mr-auto ml-[4.5%] text-[#3d155f]'>Email(<span className='text-red-600'>*</span>)</label>
                        <input id="senderemail" className='w-[95%] rounded-[3px] pl-[20px] h-[45px] mt-[10px] text-[#4831d4] bg-transparent border-b border-b-[#999]' type="email" placeholder='Email' required maxLength={40} />
                    </div>
                </div>
                <div className="flex flex-col my-[20px]">
                    <label className='text-[17px] text-center text-[#3d155f]'>Subject(<span className='text-red-600'>*</span>)</label>
                    <input id="subject" className='rounded-[3px] pl-[20px] h-[45px] mt-[10px] text-[#4831d4] bg-transparent border-b border-b-[#999]' type="text" placeholder='Subject' required maxLength={50} />
                </div>
                <div className="flex flex-col">
                    <label className='text-[17px] text-[#3d155f]'>Message(<span className='text-red-600'>*</span>)</label>
                    <textarea id="msg" className='rounded-[3px] pl-[20px] mt-[10px] pt-[10px] text-[#4831d4] bg-transparent border-b border-b-[#999]' placeholder='Message' cols="50" rows="6"></textarea>
                </div>
                <div className="flex justify-center mt-[30px]">
                    <button className='h-[50px] w-[200px] flex justify-center items-center bg-transparent rounded-[30px] text-[17px] font-semibold border border-[#4831d4] text-[#4831d4] hover:bg-[#4831d4] hover:text-white transition-all duration-300 font-mono'>Send Message</button>
                </div>
            </form>
        </section>
    )
}
export default Contact;