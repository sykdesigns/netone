import React, { useState } from 'react';
import { RiInputField } from 'react-icons/ri';






const AppHeader = () => {


    return (

        <div className='max-w-screen-2xl h-24 bg-n1-blue-light flex items-center font-custom'>

            <div className='text-2xl text-n1-blue ml-12'><h1>Open Jobs</h1></div>
            <div className='ml-3 bg-n1-orange text-n1-blue-light py-1 px-3 rounded-xl'>{ '26' }</div>


            <form class="max-w-md justify-end">   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>


        </div>

    //     <div style={{width: '100%', height: '100%', position: 'relative', background: '#F1F3F9'}}>
             
    //          <div style={{left: 50, top: 31, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
    //             <div style={{width: 105, height: 20, color: '#3A4D81', fontSize: 19, fontFamily: 'Urbane Rounded', fontWeight: '600', textTransform: 'capitalize', lineHeight: 25.27, wordWrap: 'break-word'}}>Open Jobs</div>
    //             <div style={{paddingTop: 1, paddingBottom: 2, paddingLeft: 10, paddingRight: 10, background: '#EA7317', borderRadius: 15, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
    //             <div style={{textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Urbane Rounded', fontWeight: '600', lineHeight: 22.56, wordWrap: 'break-word'}}>26</div>
    //         </div>
    //     </div>
        
    //     <div style={{width: 52, height: 20, left: 296, top: 34, position: 'absolute'}}>
    //         <div style={{width: 17, height: 20, left: 0, top: 0, position: 'absolute', opacity: 0.50, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
    //             <div style={{width: 17, height: 17.50, background: '#EA7317'}}></div>
    //         </div>
    //         <div style={{width: 20, height: 20, left: 32, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
    //             <div style={{width: 19.38, height: 16.25, background: '#EA7317'}}></div>
    //         </div>
    //     </div>
        
    //     <div style={{width: 325, paddingTop: 12, paddingBottom: 12, paddingLeft: 16, paddingRight: 128, left: 755, top: 19, position: 'absolute', background: 'white', borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 272, display: 'inline-flex'}}>
    //         <div style={{flex: '1 1 0', height: 21, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
    //             <div style={{color: '#D5DBEC', fontSize: 16, fontFamily: 'Urbane Rounded', fontWeight: '600', textTransform: 'capitalize', lineHeight: 21.28, wordWrap: 'break-word'}}>Search Jobs</div>
    //         </div>
    //         <div style={{justifyContent: 'flex-end', alignItems: 'center', display: 'flex'}}>
    //             <div style={{width: 25, height: 25, position: 'relative'}}>
    //                 <div style={{width: 24.99, height: 25, left: -0, top: 0, position: 'absolute', background: '#D5DBEC'}}></div>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    );
}


export default AppHeader;