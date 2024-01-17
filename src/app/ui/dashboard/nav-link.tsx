import { IoToday } from "react-icons/io5";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    {
        name: 'Dashboard', 
        href: '/dashboard',
        icon: IoToday,
    },
    {
        name: 'Weekly',
        href: '/weekly',
        icon: IoToday,
    },
    {
        name: 'Monthly',
        href: '/monthly',
        icon: IoToday,
    },
    {
        name: 'Annual',
        href: '/annual',
        icon: IoToday,
    },
];

export default function NavLinks() {
    const pathname = usePathname();
    return(
        <div className="flex">
        {links.map((link) => {
            const LinkIcon = link.icon;
            return (
            <div className="p-1">
            <Link
                key={link.name}
                href={link.href}
                /* makes this an active link when clicked and path changes to link.href but somehow the page doesnt reloads*/
                className={clsx(
                'flex h-[48px] grow items-center gap-1 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                    'bg-sky-100 text-blue-600': pathname == link.href,
                },
                )}
            >
                <LinkIcon className="w-6" />
                <p className="hidden md:block">{link.name}</p>
            </Link>
            </div>
            );
        })}
        </div>
    );
}





