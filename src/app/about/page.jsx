import React from 'react'
import { aboutData } from '../data'

const aboutPage = () => {
  return (
    <main>
      <div>
        <h1>Welcome to our online bookstore!</h1>
        <article>
          <div>
            <p>
            At [Store Name], we're passionate about connecting book lovers with exciting stories, enriching knowledge, and imaginative worlds. Since our foundation, we've been dedicated to building a community where books open doors to new adventures and learning.
            </p>
          </div>
          <div>
            {aboutData.map(info => (
              <div key={info.title}>
                <span>{info.title}</span>
                <p>{info.desc}</p>
              </div>
            ))}
          </div>
          <div>
            <p>
              Thank you for visiting [Store Name]. We hope you find inspiration, entertainment, and knowledge within our pages. If you have any questions or need assistance, feel free to reach out to our customer support team.
            </p>
            <p>
              Happy reading!
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}

export default aboutPage