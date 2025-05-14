import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-purple-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="space-y-4">
          <div className="w-20">
            <Image
              src="/images/logo.png" // Replace with your actual logo path
              alt="Logo"
              width={80}
              height={80}
            />
          </div>
          <p className="text-sm">
            A platform where past students of LIBII-OBE GRAMMAR SCHOOL 1996 set, reconnect, collaborate, and contribute
            towards the development of our alma mater and the community.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-bold mb-2">USEFUL LINKS</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Committee</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold mb-2">CONTACT US</h3>
          <p className="text-sm">Phone: +796 654 9211 000</p>
          <p className="text-sm">Email: youremail@gmail.com</p>
        </div>
      </div>

      <div className="bg-yellow-500 text-center py-4 text-xs">
        Copyright © 2024 All Rights Reserved
      </div>
    </footer>
  );
}
