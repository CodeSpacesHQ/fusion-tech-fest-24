import * as React from "react";
import { SVGProps, memo } from "react";

const TelegramIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.4" y="0.4" width="31.2" height="31.2" rx="15.6" fill="#FAD278" />
        <rect x="0.4" y="0.4" width="31.2" height="31.2" rx="15.6" stroke="#361566" stroke-width="0.8" />
        <path d="M16 8.00098C11.584 8.00098 8 11.585 8 16.001C8 20.417 11.584 24.001 16 24.001C20.416 24.001 24 20.417 24 16.001C24 11.585 20.416 8.00098 16 8.00098ZM19.712 13.441C19.592 14.705 19.072 17.777 18.808 19.193C18.696 19.793 18.472 19.993 18.264 20.017C17.8 20.057 17.448 19.713 17 19.417C16.296 18.953 15.896 18.665 15.216 18.217C14.424 17.697 14.936 17.409 15.392 16.945C15.512 16.825 17.56 14.961 17.6 14.793C17.6056 14.7675 17.6048 14.7411 17.5978 14.716C17.5909 14.6909 17.5779 14.6679 17.56 14.649C17.512 14.609 17.448 14.625 17.392 14.633C17.32 14.649 16.2 15.393 14.016 16.865C13.696 17.081 13.408 17.193 13.152 17.185C12.864 17.177 12.32 17.025 11.912 16.889C11.408 16.729 11.016 16.641 11.048 16.361C11.064 16.217 11.264 16.073 11.64 15.921C13.976 14.905 15.528 14.233 16.304 13.913C18.528 12.985 18.984 12.825 19.288 12.825C19.352 12.825 19.504 12.841 19.6 12.921C19.68 12.985 19.704 13.073 19.712 13.137C19.704 13.185 19.72 13.329 19.712 13.441Z" fill="#361566" />
    </svg>

);

export default memo(TelegramIcon);
