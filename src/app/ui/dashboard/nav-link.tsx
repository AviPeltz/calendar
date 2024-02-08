import { IoToday } from "react-icons/io5";
import { MdCalendarMonth } from "react-icons/md";
import { BsCalendar4Week } from "react-icons/bs";
import { GrPlan } from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    {
        name: 'Dashboard', 
        href: '/',
        icon: RxDashboard,
    },
    {
        name: 'Weekly',
        href: '/weekly',
        icon: BsCalendar4Week,
    },
    {
        name: 'Monthly',
        href: '/monthly',
        icon: MdCalendarMonth,
    },
    {
        name: 'Annual',
        href: '/annual',
        icon: GrPlan,
    },
];

export default function NavLinks() {
    const pathname = usePathname();
    return(
        <div className="flex">
        {links.map((link) => {
            const LinkIcon = link.icon;
            return (
            <div key={link.name} className="p-1">
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
                <p key={link.name} className="hidden md:block">{link.name}</p>
            </Link>
            </div>
            );
        })}
        </div>
    );
}





