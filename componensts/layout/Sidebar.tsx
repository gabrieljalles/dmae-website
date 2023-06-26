import { BsBellFill, BsFillFilePersonFill, BsFillGridFill, BsHouseFill } from 'react-icons/bs';
import SidebarItem from './SidebarItem';
import { IconBaseProps } from 'react-icons/lib/esm/iconBase';

const Sidebar = () => {

    //const {data: currentUser} = useCurrentUser();
    const items = [
        {
            label: 'Home',
            href: '/',
            icon: BsHouseFill
        },
        {
            label:'Apps',
            href: '/apps',
            icon: BsFillGridFill,
            auth: true,
        },
        {
            label:'Perfil',
            //href: `/users/${currentUser?.id}`,
            icon: BsFillFilePersonFill,
            auth: true,
        },
    ];

    return(
        <div className="col-span-1 h-full pr-4 md:pr-6">
            <div className="flex flex-col items_end">
                <div className="space-y-2 lg:w-[230px]">
                    {items.map((item) => (
                        <SidebarItem
                            key = {item.href}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                            auth={item.auth}
                        /> 
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;