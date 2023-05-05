import React from 'react';

const Footer = () => {
    return (
        <footer class="bg-gray-800 text-gray-400 pt-10 pb-8 px-4 sm:px-6 lg:px-8">
  <div class="grid grid-cols-2 md:grid-cols-4 gap-10">
    <div>
      <h3 class="text-lg font-medium mb-4">Services</h3>
      <ul>
        <li><a href="#" class="hover:text-white">Branding</a></li>
        <li><a href="#" class="hover:text-white">Design</a></li>
        <li><a href="#" class="hover:text-white">Marketing</a></li>
        <li><a href="#" class="hover:text-white">Advertisement</a></li>
      </ul>
    </div>
    <div>
      <h3 class="text-lg font-medium mb-4">Company</h3>
      <ul>
        <li><a href="#" class="hover:text-white">About Us</a></li>
        <li><a href="#" class="hover:text-white">Contact</a></li>
        <li><a href="#" class="hover:text-white">Jobs</a></li>
        <li><a href="#" class="hover:text-white">Press Kit</a></li>
      </ul>
    </div>
    <div>
      <h3 class="text-lg font-medium mb-4">Address</h3>
      <p class="mb-2">44 Canal Center Plaza #200,</p>
      <p class="mb-2">Alexandria, VA 22314, USA</p>
      <p class="mb-2">Hotline: 1900 – 123 456 78</p>
      <p>Email: abcd@gmail.com</p>
    </div>
    <div>
      <h3 class="text-lg font-medium mb-4">Opening Hours</h3>
      <ul>
        <li>Monday: 09:00 AM - 22:00 PM</li>
        <li>Tuesday: 09:00 AM - 22:00 PM</li>
        <li>Thursday: 09:00 AM - 22:00 PM</li>
        <li>Friday: 09:00 AM - 22:00 PM</li>
      </ul>
    </div>
  </div>
  <div class="mt-8">
    <h3 class="text-lg font-medium mb-4">Newsletter</h3>
    <form class="flex">
      <input type="email" placeholder="Enter your email address" className="w-52 rounded-l-lg px-4 py-3 mr-2 text-gray-900 bg-white border border-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"/>
      <button type="submit" class="px-8 py-3 bg-blue-500 text-white font-medium rounded-r-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Send</button>
    </form>
  </div>
</footer>
    );
};

export default Footer;