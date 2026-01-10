const FooterSection = ({ title, color, children }: { title: string; color: string; children: React.ReactNode }) => (
    <div>
        <h4 className="font-bold mb-3 sm:mb-4 text-gray-900 flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full`} style={{ backgroundColor: color }} />
            {title}
        </h4>
        {children}
    </div>
);

export default FooterSection;