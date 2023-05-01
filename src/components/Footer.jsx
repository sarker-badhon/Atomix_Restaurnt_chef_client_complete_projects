import React from 'react';

const Footer = () => {
    return (
        <footer className="">
          <div className="footer p-10 bg-neutral text-neutral-content h-80">
          <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>

            <div>
                <span className="footer-title">ADDRESS</span>
                <p className="link link-hover">44 Canal Center Plaza #200,</p>
                <p className="link link-hover">Alexandria, VA 22314, USA</p>
                <p className="link link-hover">Hotline: 1900 – 123 456 78</p>
                <p className="link link-hover">Email: abcd@gmail.com</p>

            </div>
            <div>
                <span className="footer-title">OPENING HOURS</span>
                <a className="link link-hover">Monday: <span className='ml-5'>09:00 AM - 22:00 PM</span>
                </a>
                <a className="link link-hover">Tuesday:: <span className='ml-5'>09:00 AM - 22:00 PM</span>
                </a>

                <a className="link link-hover">Thursday: <span className='ml-5'>09:00 AM - 22:00 PM</span>
                </a>
                <a className="link link-hover">Friday: <span className='ml-5'>09:00 AM - 22:00 PM</span>
                </a>

            </div>
            <div>
                <span className="footer-title">Newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text text-white">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="email" placeholder="username@site.com" className="input input-bordered w-full pr-16 text-black" required />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
                <div>
                </div>
            </div>
          </div>

        </footer>
    );
};

export default Footer;