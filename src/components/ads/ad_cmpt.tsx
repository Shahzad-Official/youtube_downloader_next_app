/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';

export default function Banner(): JSX.Element {
    const banner = useRef<HTMLDivElement>(null);

    const atOptions = {
		'key' : 'c306d2fc594350b79872ec61392640b5',
		'format' : 'iframe',
		'height' : 90,
		'width' : 728,
		'params' : {}
	};

    useEffect(() => {
        if (banner.current && !banner.current.firstChild) {
            const conf = document.createElement('script');
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = `//www.highperformancedformats.com/${atOptions.key}/invoke.js`;
            conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

            banner.current.appendChild(conf);
            banner.current.appendChild(script);
        }
    }, [banner]);

    return (
        <div className="mx-2 my-5 border border-gray-200 justify-center items-center text-white text-center" ref={banner}></div>
    );
}
