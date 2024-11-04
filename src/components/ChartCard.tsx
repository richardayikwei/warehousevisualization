import { PropsWithChildren } from "react";


const ChartCard = ({children} : PropsWithChildren) => {
    return <div className="h-72 w-full shadow-lg mt-7 flex justify-center">{ children}</div>;
};

export default ChartCard;
