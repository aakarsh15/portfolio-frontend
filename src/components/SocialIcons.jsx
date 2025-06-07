import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const icons = [
    {
        icon: <FaFacebookF />,
        url: "https://www.facebook.com/aakarsh.singh.9047",
    },
    {
        icon: <FaInstagram />,
        url: "https://instagram.com/aakarsh_1506",
    },
    {
        icon: <FaLinkedinIn />,
        url: "https://www.linkedin.com/in/aakarsh1506",
    },
    {
        icon: <MdEmail />,
        url: "mailto:aakarshsingh431@gmail.com",
    },
    {
        icon: <MdPhone />,
        url: "tel:+917033585431",
    },
    {
        icon: <FaTwitter />,
        url: "https://x.com/aakarsh_1506",
    },
];

const SocialIcons = () => {
    return (
        <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
            <div className="flex flex-col gap-4 bg-black bg-opacity-50 p-3 rounded-l-xl">
                {icons.map((item, index) => (
                    <a
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white text-xl transition-transform duration-300 hover:scale-125"
                    >
                        {item.icon}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default SocialIcons;
