import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../../utils/data'

const Faqs = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

  return (
   <section id='faq' className='py-20 lg:py-28 bg-white'>
      <div className=''>

        <div className=''>
            <h2 className=''>Frequently Asked Questions</h2>
            <p className=''>Everything you need to know about the product and billing.</p>
        </div>

        <div className=''>

        </div>

      </div>
   </section>
)
}

export default Faqs