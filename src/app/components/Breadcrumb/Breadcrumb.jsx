'use client';

import React from 'react';
import Link from 'next/link';

const Breadcrumb = ({ title, breadcrumbs }) => {
  return (
    <section className="banner_area">
      <div className="container">
        <div className="banner_inner_content">
          <h1>{title}</h1>
          <ul>
            {breadcrumbs.map((item, index) => (
              <li key={index} className={item.active ? 'active' : ''}>
                {item.link ? (
                  <Link href={item.link}>{item.name}</Link>
                ) : (
                  <span>{item.name}</span>
                )}
               
                {index < breadcrumbs.length - 1 && <span> &gt; </span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
