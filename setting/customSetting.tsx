const customSetting = {
    siteName: 'OneSS',
    email: 't@dzaaaaaa.com',
    index: {
        backgroundImage: '/api/bingPic',
        title: 'OneSS',
        introduction: 'Make your Onedrive work like OSS'
    },
    socialLink: [
        {
            name: 'github',
            enable: true,
            link: 'https://github.com/Tualin14/OneSS',
            icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
        },
        {
            name: 'twitter',
            enable: true,
            link: 'https://twitter.com/OliviaiDT',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current">
                <path
                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
        },
        {
            name: 'bilibili',
            enable: true,
            link: 'https://space.bilibili.com/403504801',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="fill-current">
                <path
                    d="M801 237l-51 .002 44-45c10-10 15-22.667 15-38s-5-28-15-38-22.667-15-38-15-28.333 5-39 15l-128 121H436l-129-121c-10-10-22.667-15-38-15s-28 5-38 15-15 22.667-15 38 5 28 15 38l44 45h-51c-46 1.333-83.833 17-113.5 47s-45.167 67.667-46.5 113v346c1.333 49.333 16.833 89.166 46.5 119.499S178 908.667 224 910h570c46-1.333 84-16.833 114-46.5S953.333 796 954 750V397c2-45.333-11.5-83-40.5-113S847 238.333 801 237zm45 506.002c-.667 16-6.504 29.667-17.504 41s-24.5 17-40.5 17h-557c-16 0-29.667-5.667-41-17s-17-25-17-41v-339c.667-16.667 6.334-30.334 17.001-41.001s24.334-16.334 41.001-17.001h557c16.667.667 30.334 6.334 41.001 17.001s16.334 24.334 17.001 41.001v339zm-500.004-282c-16 .667-29.504 6.5-40.504 17.5s-16.833 24.5-17.5 40.5v58c.667 16 6.334 29.5 17.001 40.5s24.334 16.5 41.001 16.5 30.334-5.5 41.001-16.5 16.334-24.5 17.001-40.5v-58c-.667-16-6.5-29.5-17.5-40.5s-24.5-16.833-40.5-17.5zm332.996 0c-16 .667-29.504 6.5-40.504 17.5s-16.833 24.5-17.5 40.5v58c.667 16 6.334 29.5 17.001 40.5s24.334 16.5 41.001 16.5 30.334-5.5 41.001-16.5 16.334-24.5 17.001-40.5v-58c-.667-16-6.5-29.5-17.5-40.5s-24.5-16.833-40.5-17.5z"/>
            </svg>
        },
        {
            name: 'youtube',
            enable: false,
            link: '',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current">
                <path
                    d="M23.499 6.203a3.008 3.008 0 00-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 00-2.088 2.09A31.258 31.26 0 000 12.01a31.258 31.26 0 00.523 5.785 3.008 3.008 0 002.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 002.089-2.09 31.258 31.26 0 00.5-5.784 31.258 31.26 0 00-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"/>
            </svg>
        },
        {
            name: 'tiktok',
            enable: false,
            link: '',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-current">
                <path
                    d="M412.19 118.66a109.27 109.27 0 01-9.45-5.5 132.87 132.87 0 01-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14 23.9 350 16 350.13 16h-82.44v318.78c0 4.28 0 8.51-.18 12.69 0 .52-.05 1-.08 1.56 0 .23 0 .47-.05.71v.18a70 70 0 01-35.22 55.56 68.8 68.8 0 01-34.11 9c-38.41 0-69.54-31.32-69.54-70s31.13-70 69.54-70a68.9 68.9 0 0121.41 3.39l.1-83.94a153.14 153.14 0 00-118 34.52 161.79 161.79 0 00-35.3 43.53c-3.48 6-16.61 30.11-18.2 69.24-1 22.21 5.67 45.22 8.85 54.73v.2c2 5.6 9.75 24.71 22.38 40.82A167.53 167.53 0 00115 470.66v-.2l.2.2c39.91 27.12 84.16 25.34 84.16 25.34 7.66-.31 33.32 0 62.46-13.81 32.32-15.31 50.72-38.12 50.72-38.12a158.46 158.46 0 0027.64-45.93c7.46-19.61 9.95-43.13 9.95-52.53V176.49c1 .6 14.32 9.41 14.32 9.41s19.19 12.3 49.13 20.31c21.48 5.7 50.42 6.9 50.42 6.9v-81.84c-10.14 1.1-30.73-2.1-51.81-12.61z"/>
            </svg>
        },
        {
            name: 'sina',
            enable: false,
            link: '',
            icon: <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                <path
                    d="M727.598 502.532c-34.856-6.761-17.916-25.523-17.916-25.523s34.106-56.214-6.75-97.083c-50.632-50.617-173.666 6.442-173.666 6.442-46.988 14.582-34.534-6.655-27.892-42.798 0-42.582-14.583-114.652-139.761-72.083-125.057 42.798-232.424 192.748-232.424 192.748-74.667 99.642-64.785 176.652-64.785 176.652 18.653 170.011 199.296 216.678 339.792 227.726 147.821 11.595 347.318-50.954 407.818-179.451C872.499 560.447 762.574 509.509 727.598 502.532zM415.136 820.671c-146.737 6.858-265.366-66.725-265.366-164.653 0-98.033 118.629-176.651 265.366-183.414 146.844-6.764 265.701 53.737 265.701 151.572C680.837 722.089 561.979 814.005 415.136 820.671zM385.864 537.174C238.27 554.449 255.33 692.696 255.33 692.696s-1.514 43.774 39.57 66.07c86.357 46.774 175.273 18.454 220.212-39.556C560.052 661.175 533.672 520.021 385.864 537.174zM348.637 731.209c-27.558 3.226-49.76-12.655-49.76-35.714 0-22.953 19.725-46.989 47.296-49.868 31.656-3.013 52.251 15.226 52.251 38.285C398.424 706.863 376.088 728.087 348.637 731.209zM435.637 657.09c-9.333 6.978-20.822 6.013-25.75-2.356-5.141-8.154-3.214-21.238 6.227-28.108 10.94-8.141 22.309-5.797 27.237 2.371C448.292 637.352 444.756 649.898 435.637 657.09zM799.466 442.675c11.892 0 22.002-8.798 23.701-20.273 0.216-0.857 0.322-1.607 0.322-2.571 18.024-162.071-132.797-134.177-132.797-134.177-13.391 0-24.131 10.833-24.131 24.344 0 13.298 10.74 24.132 24.131 24.132 108.332-23.917 84.429 84.415 84.429 84.415C775.121 431.948 786.036 442.675 799.466 442.675zM781.885 159.794c-52.145-12.213-105.774-1.688-120.801 1.191-1.164 0.107-2.248 1.206-3.32 1.42-0.522 0.107-0.842 0.643-0.842 0.643-14.812 4.191-25.645 17.903-25.645 34.106 0 19.31 15.654 35.19 35.178 35.19 0 0 18.988-2.543 31.857-7.579 12.762-5.142 120.771-3.83 174.414 86.264 29.273 65.749 12.869 109.75 10.82 116.821 0 0-6.963 17.088-6.963 33.906 0 19.416 15.667 31.615 35.057 31.615 16.217 0 29.836-2.209 33.813-29.633l0.214 0C1003.261 271.767 875.192 181.567 781.885 159.794z"></path>
            </svg>
        },
        {
            name: 'iqiyi',
            enable: false,
            link: '',
            icon: <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                <path
                    d="M266.622942 667.807578c27.710109 13.487176 57.219189 16.874319 87.606267 14.361079 3.733021-0.306992 6.67605-0.838088 7.754614 4.311189 3.403516 16.222473 12.164041 23.613814 28.613688 25.535583 13.706163 1.599428 27.431769 0.787946 41.148166 0.86367 5.618974 0.030699 8.289804-2.774183 8.454556-8.41567 0.191358-6.5246 0.158612-13.063527 0.035816-19.593244-0.127913-6.817266-2.659573-9.188266-9.642614-9.233292-7.870248-0.053212-15.742543 0.032746-23.613814-0.050142-2.616594-0.026606-5.378497 0.301875-7.952112-1.766226 1.147126-1.983167 2.982938-2.094708 4.430916-2.828418 17.404392-8.836249 29.739325-21.457708 29.777187-42.283012 0.141216-76.876901 0.089028-153.754826 0.028653-230.632751-0.01228-14.887059-6.311753-26.730805-18.033725-35.892465-8.949836-7.001461-19.396769-10.413164-30.125111-13.234419-25.838482-6.794753-52.074006-6.429433-78.314647-3.6399-14.059204 1.496074-27.7756 5.201465-39.98876 12.573363-15.971763 9.640568-25.858948 22.906709-25.775037 42.854017 0.311085 75.368548 0.183172 150.740166 0.082888 226.110761C241.086335 645.965108 249.746576 659.592476 266.622942 667.807578zM313.779961 404.813792c0-2.670829-0.01228-5.395894 0.49221-7.997138 1.063215-5.489014 4.231371-9.435906 9.671267-11.190877 8.673543-2.794649 17.47807-2.920516 26.214035-0.479931 6.592139 1.842974 9.333576 5.430686 9.66615 12.408611 0.265036 5.513574 0.13917 11.045567 0.13917 16.569374 0.010233 32.981159 0.004093 65.963341 0.004093 98.9445-0.002047 36.665061 0.008186 73.329099-0.004093 109.99416-0.00614 13.960966-3.62762 18.144242-17.579377 19.789719-7.395434 0.87288-14.721283 0.500397-21.370727-3.52222-4.330632-2.620687-6.600325-6.55223-7.063883-11.522428-0.200568-2.161223-0.182149-4.348028-0.182149-6.522554C313.759495 549.129642 313.757448 476.971206 313.779961 404.813792zM132.619972 328.946894c20.436448-0.042979 40.871873-0.106424 61.309344 0.048095 4.427846 0.033769 6.071276-1.570775 6.644327-5.987365 2.451842-18.8493 11.310603-33.082466 30.011524-39.767725 5.856381-2.093684 11.895935-3.470031 18.029632-4.412496 62.11264-9.54233 124.627439-14.725376 187.399087-16.923438 22.750143-0.797156 45.533033-0.268106 68.302619-0.923022 17.721617-0.506537 35.483142 0.292666 53.226249 0.649799 11.039427 0.222057 22.086018 0.403183 33.128515 0.733711 36.82879 1.102101 73.535807 3.761674 110.172215 7.500834 25.478278 2.600221 50.918693 5.624091 76.157517 10.037611 25.308409 4.426823 38.588877 18.193361 42.085514 43.597961 0.604774 4.39203 2.541893 5.502317 6.551206 5.478781 20.436448-0.112564 40.871873-0.150426 61.309344 0.023536 4.767584 0.040932 6.210445-1.824555 5.776563-6.311753-1.102101-11.338233-2.335185-22.644743-5.14109-33.719986-8.612145-33.965579-28.610618-56.087413-63.819514-64.039525-32.906457-7.43125-66.165955-12.093433-99.615788-15.773242-24.452925-2.690272-48.972365-4.572132-73.510224-6.345522-28.882817-2.088568-57.789171-3.635807-86.71906-4.539386-18.071587-0.565888-36.178991-0.106424-54.270021-0.106424-30.302143-0.068562-60.609403-0.38374-90.876754 1.77032-19.693528 1.400906-39.446407 1.977028-59.134819 3.432169-30.202882 2.233877-60.373019 4.915963-90.411149 8.834202-27.393907 3.573385-54.67832 7.66968-81.412195 15.032368-24.543999 6.759961-40.532135 22.579251-50.29243 45.382607-7.013741 16.385179-9.210779 33.831526-10.595312 51.414997C126.582465 328.366679 129.181663 328.95508 132.619972 328.946894zM887.342062 698.827059c-20.258393 0.324388-40.520879 0.659009-60.775178 0.592494-4.7727-0.01535-6.133697 1.476631-6.825452 6.076392-2.188852 14.548344-7.433296 27.493168-21.264303 35.157731-7.576559 4.197602-15.69854 6.753821-24.180725 8.080026-46.667879 7.294127-93.612051 12.165064-140.742465 15.021112-25.723871 1.557472-51.498908 2.617617-77.260641 2.948145-30.970362 0.399089-61.948911 0.210801-92.934622-0.343831-41.199331-0.737804-82.296331-2.639107-123.32784-6.330172-31.351032-2.820232-62.61406-6.411013-93.684706-11.437493-10.603499-1.715061-20.857027-4.861728-29.420053-12.034081-10.220782-8.56098-13.870916-20.214391-15.760962-32.691563-0.448208-2.957355-1.191128-4.544503-4.586458-4.403287-14.234189 0.599657-28.442796-1.280156-40.901549-0.567935-8.986675 0-16.187681 0.033769-23.390733-0.014326-3.434216-0.022513-4.814656 1.570775-4.581342 4.975315 1.130753 16.607236 3.39226 33.024138 9.461489 48.622394 9.41237 24.194028 25.675776 41.062208 51.387367 48.202838 23.473621 6.520507 47.39852 10.467399 71.448262 13.755282 47.444569 6.486738 95.17771 9.93221 142.937456 13.021571 33.42732 2.162246 66.919109 2.483564 100.382245 2.787486 34.640961 0.315178 69.301366-0.215918 103.902418-2.51631 19.200294-1.277086 38.442544-1.984191 57.628512-3.433192 29.363771-2.220574 58.690704-4.937452 87.902002-8.738012 27.243481-3.544733 54.333466-7.751544 80.871889-15.168468 23.989367-6.705726 39.436174-22.560832 49.134047-44.646849 7.095605-16.150842 9.215896-33.477462 10.764158-50.879807C893.950574 700.04684 891.710556 698.755428 887.342062 698.827059zM736.938564 509.999436c17.520025-48.677653 35.057447-97.351212 52.524261-146.049331 2.910283-8.110725 0.245593-11.875468-8.311293-11.911284-17.919115-0.070608-35.83823-0.061398-53.760414 0.005117-6.867408 0.024559-8.366551 1.14508-10.451026 7.762801-6.592139 20.920472-13.170974 41.84606-19.62292 62.811558-4.418636 14.366196-8.614192 28.800953-13.265118 44.397163-0.754177-2.601244-1.13894-3.867074-1.493004-5.14109-9.462512-34.220383-20.275789-68.031443-30.944779-101.884458-2.089591-6.628978-3.789303-7.906064-10.413164-7.934716-18.253736-0.080841-36.509519-0.106424-54.765301 0.008186-7.816013 0.049119-10.589173 4.246721-7.964392 11.501962 2.506077 6.928806 5.021364 13.852496 7.519254 20.784372 16.96437 47.104831 33.507138 94.369298 51.092655 141.241838 7.158027 19.071358 11.564383 37.96773 10.707876 58.560744-1.101077 26.414603-0.300852 52.912094-0.243547 79.373769 0.01842 9.104355 2.288113 11.293207 11.235902 11.299347 16.916275 0.011256 33.833573 0.011256 50.747801 0 9.090029-0.00614 10.541077-1.440815 10.543124-10.457166 0.010233-33.830503 0.013303-67.662029-0.008186-101.493555-0.002047-3.365654 0.174985-6.655584 1.350764-9.881045C726.634894 538.679639 731.779054 524.33698 736.938564 509.999436zM537.833877 352.018356c-16.417925-0.013303-32.833803-0.01228-49.251727 0-10.070356 0.00614-12.033058 1.969864-12.036128 12.05557-0.008186 49.755194-0.002047 99.510388-0.002047 149.265582 0.002047 50.258661-0.01228 100.516298 0.013303 150.774959 0.005117 8.498558 2.267647 10.697643 10.760065 10.708899 16.918321 0.01842 33.838689 0.010233 50.760081 0.002047 9.859555-0.002047 11.799744-1.90028 11.80486-11.689227 0.016373-31.327496 0.008186-62.656015 0.008186-93.982488-0.00307-68.350714 0.005117-136.702452-0.011256-205.053166C549.877167 354.037339 547.832601 352.024495 537.833877 352.018356zM883.827005 352.023472c-16.914228-0.030699-33.82948-0.021489-50.743708-0.005117-9.078773 0.00921-10.911514 1.826602-10.914584 10.847046-0.008186 50.242288-0.00307 100.484575-0.00307 150.726863 0 50.41011-0.005117 100.818173 0.00614 151.228283 0.002047 8.209986 1.771343 9.981329 10.066263 9.996678 17.247826 0.031722 34.498722 0.021489 51.749618 0.00614 8.5487-0.008186 10.667967-2.073218 10.667967-10.706853 0.021489-100.483552 0.021489-200.969151 0.00307-301.452703C894.655631 354.217441 892.406404 352.040868 883.827005 352.023472zM134.55095 674.761967c18.925025 0.115634 37.85005 0.044002 56.776098 0.039909 4.668323-0.002047 7.105838-2.518357 7.603165-6.992251 0.223081-1.988284 0.166799-4.01443 0.166799-6.021134 0.008186-33.330106 0.00614-66.659189 0.00614-99.988272 0-34.166147 0.016373-68.332295-0.013303-102.499465-0.005117-8.292873-1.730411-9.959839-10.069333-9.969049-17.417695-0.017396-34.836413-0.016373-52.254108 0-8.673543 0.00921-10.1645 1.51961-10.1645 10.3006-0.007163 39.86187-0.005117 79.722716-0.002047 119.583562 0 28.806069-0.01842 57.613162 0.01842 86.421278C126.626467 672.235424 128.66694 674.725128 134.55095 674.761967zM126.644887 417.044348c0.062422 5.426593 2.654456 8.195659 7.976672 8.227382 18.591427 0.113587 37.181831 0.115634 55.773258 0 5.990434-0.037862 8.612145-2.683109 8.647961-8.694009 0.109494-18.591427 0.109494-37.182854 0-55.774281-0.033769-6.0416-2.622734-8.68173-8.613168-8.719592-18.424628-0.11768-36.848233-0.125867-55.270814 0.014326-6.16235 0.046049-8.478092 2.577708-8.53335 8.673543-0.080841 9.210779-0.021489 18.423605-0.01842 27.635407C126.610094 397.951501 126.530276 407.498948 126.644887 417.044348z"></path>
            </svg>
        },
        {
            name: 'ixigua',
            enable: false,
            link: '',
            icon: <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                <path
                    d="M827.3 196c-40.7-40.9-89-73.5-142.1-96.1a447.594 447.594 0 0 0-347.5 0C230.7 145.7 145.5 231 99.9 338.1a441 441 0 0 0-35.3 173.6v22.8c0.8 25.1 10.5 49.2 27.3 67.9 16.1 18.5 37.7 31.4 61.7 36.9 57.6 9.6 110.7 37 151.9 78.4 41.3 40.4 68.8 92.8 78.7 149.7 11.4 51.7 56.2 89.1 109 91.2h18.3c59.7 0.2 118.8-11.8 173.6-35.3 165.7-69.6 273.5-231.9 273.3-411.6 0.2-59.6-11.8-118.7-35.1-173.6-22.5-53.1-55.1-101.4-96-142.1M591.5 386.6c34.4 19.6 65.8 44.2 93.2 72.8 13.7 13.6 21.1 32.2 20.6 51.4 0.6 19.2-6.9 37.7-20.6 51.2-27.4 28.9-58.8 53.8-93.2 74-34.8 20.6-72.5 35.7-111.9 44.7-18.6 4.7-38.3 1.8-54.7-8-16.6-9.8-28.9-25.7-34.2-44.2-10.7-45.6-16.1-85.1-16.1-118.6-0.6-40.1 4.9-80.2 16.3-118.7 5.5-17.9 17.8-33 34.2-42 16.4-9.9 35.9-12.9 54.5-8.5 39.2 10.1 76.8 25.6 111.9 45.9z m0 0"></path>
            </svg>
        },]
}

export default customSetting