import { useRouter } from "next/router";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface SidebarItemProps {
    label: string;
    href?: string;
    icon: IconType
    onClick?: () => void;
    auth?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    label, href, icon: Icon, onClick, auth
}) => {
    //const loginModal = useLoginModal();
    const router = useRouter();
    //const {data: currentUser} = useCurrentUser();

    const handleClick = useCallback(() => {
        
        if (onClick) {
            return onClick();
        }

        //if(auth && !currentUser) {
        //   loginModal.onOpen();
        //}else if (href) {
        //    router.push(href);
        //}

    },[router, onClick, href, auth]); //currentUser, loginModal]);

    return (
        <div onClick={handleClick} className="flex flex-row items-center">
            <div className=" relative rouded-full h-14 w-14 flex items-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
                <Icon size={33} color="white" />
            </div>
            <div className=" relative hidden lg:flex items-center items-row gap-4 p-4 rounded-full hover: bg-slate-300 hover:bg-opacity-10 cursor-pointer">
                <Icon size={33} color="white" />
                <p className="hidden  lg:block text-white text-xl">
                    {label}
                </p>
            </div>
        </div>
    )
}

export default SidebarItem;