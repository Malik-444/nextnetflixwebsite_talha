import React from 'react';
import styles from "@/app/styles/common.module.css";
import MovieCard from "@/app/components/MovieCard";

const Movie = async () => {

    await new Promise(resolve => setTimeout(resolve,4000))
    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0d295eaa1amsh87112c0c7ee5b28p133459jsn572a9e15eba9',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };
    const res = await fetch(url, options);
    const data = await res.json();
    const main_Data = data.titles;
    // console.log(data);


    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movies</h1>
                    <div className={styles.card_section}>
                        {
                            main_Data.map((cuElem) => {
                                return <MovieCard key={cuElem.id} {...cuElem}/>
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movie;