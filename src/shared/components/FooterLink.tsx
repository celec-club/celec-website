const FooterLink = ({ href, label, color }: { href: string; label: string; color?: string }) => (
    <li>
        <a
            href={href}
            className={`flex items-center group text-xs sm:text-sm transition-all duration-300 hover:pl-2 ${color ? `hover:text-[${color}]` : "hover:text-blue-600"
                }`}
        >
            <span
                className={`w-1.5 h-1.5 rounded-full mr-2 opacity-0 group-hover:opacity-100`}
                style={{ backgroundColor: color || "#3b82f6" }}
            />
            {label}
        </a>
    </li>
);

export default FooterLink;