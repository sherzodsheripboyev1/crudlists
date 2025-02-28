import React, { useEffect, useRef, useState, setData } from 'react'
// import "../index.csss"


function clearin({ setValue, element, data_id }) {

    // const nameRef = useRef();
    // const authorRef = useRef();
    // const yearRef = useRef();
    const [name, setName] = useState(null)
    const [author, setAuthor] = useState(null)
    const [year, setYear] = useState(null)

    const addBooks = () => {
        console.log("qoshish ishladi");

        try {
            if (!name || !author || !year) {
                alert("Iltimos, barcha maydonlarni to'ldiring!");
                return;
            }


            const newBook = {
                name: name,
                author: author,
                year: year,
            }

            let set_dats = [...element]
            set_dats.push(newBook)
            setValue(set_dats);
            console.log(newBook);

            setName(" ")
            setAuthor(" ")
            setYear("")


        } catch (error) {

        }
    }
    useEffect(() => {
        if (data_id !== undefined) {
            // console.log(data_id);
            setName(element[data_id].name)
            setAuthor(element[data_id].author)
            setYear(element[data_id].year)
        }
    }, [data_id]);
    const editBook = () => {
        let current_data = [...element]
        console.log(current_data);
        const newBook = {
            name: name,
            author: author,
            year: year,
        }
        current_data.splice(data_id, 1, newBook)
        setValue(current_data)
        setName(" ")
        setAuthor(" ")
        setYear(" ")
       
        setData(null)

    }




    return (
        <div className=" w-[80%] mx-auto     ">
            <h1 className='text-4xl font-bold text-center m-5'>Kitoblar to'plami</h1>
            <div className=" w-[50%] mx-auto flex flex-col justify-center">
                <label htmlFor="" className='text-2xl font-bold '>Name:</label>
                <input
                    // ref={nameRef}
                    type="text"
                    className='border-2 border-gray-400 my-2 px-3 py-1 text-xl'
                    placeholder='kitob nomi '
                    onInput={(val) => {
                        setName(val.target.value)
                        // console.log(val);

                    }}
                    value={name}
                />
                <label htmlFor="" className='text-2xl font-bold '>Author:</label>
                <input
                    // ref={authorRef}
                    type="text"
                    className='border-2 border-gray-400 my-2 px-3 py-1 text-xl'
                    placeholder='kitob yozuvchisi '
                    onInput={(val) => {
                        setAuthor(val.target.value)
                        // console.log(val);

                    }}
                    value={author}
                />
                <label htmlFor="" className='text-2xl font-bold '>Year:</label>
                <input
                    // ref={yearRef}
                    type="number"
                    className='border-2 border-gray-400 my-2 px-3 py-1 text-xl'
                    placeholder='kitob yilini '
                    onInput={(val) => {
                        setYear(val.target.value)
                        // console.log(val);

                    }}
                    value={year}
                />
            </div>
            <div className="flex justify-center">
                {
                    data_id == null ? 
                    <button onClick={() => { addBooks() }} className='border-2 border-gray-400 rounded-2xl px-5 py-2 text-xl mx-auto active:bg-gray-700 active:text-white'>Qo'shish</button>
                    :
                    <button onClick={() => { editBook() }} className='border-2 border-gray-400 rounded-2xl px-5 py-2 text-xl mx-auto active:bg-gray-700 active:text-white'>O'zgartirish</button>
                        
                }

            </div>
        </div>
    )
}

export default clearin;
