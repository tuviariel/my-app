import loader from "./loader.gif";

export const TextElement = (props: any) => {
    //currently only the elemType === "P" and "I" will work.
    //The idea of passing an elemType is for a future option to enable to send or except
    //different types of elements like P-paragraph, H-header, I-image, L-list, T-table.      

    const {
        text,
        ts,
        sender,
        elemType,
    } = props.chatItem;
    return (
        <div
            className="chatTextWrap">
            {elemType === "H" && (
                <h1 className="">
                    {text}
                </h1>
            )}
            {elemType === "P" && (
                <p className="chatText">
                    {text}
                </p>
            )}
            {elemType === "I" && (
                <div className={text === "Loading..." ? "loader" : "imageText"}>
                    <img
                        loading="lazy"
                        className=""
                        src={text === "Loading..." ? loader : text}
                        alt="Image"
                    />
                </div>
            )}
            {elemType === "L" && (
                <ul className="">
                    {Array.isArray(text) &&
                        text.length > 0 &&
                        text.map(listItem => {
                            return listItem
                        })
                    }
                </ul>
            )}
            {elemType === "T" && (
                <table className="">
                    <thead>
                        <tr>
                            {text}
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            )}
            <div className="infoText">
                {sender + (text === "Loading..." ? "" : ",  " + ts)}
            </div>
        </div>
    );
};
