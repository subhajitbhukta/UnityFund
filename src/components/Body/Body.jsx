import React from 'react';

const content = [
  {
    id: 1,
    heading: 'Heading One',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo vel quam faucibus, nec consequat velit iaculis. Integer ac elementum purus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aspernatur voluptatum unde repudiandae quod itaque non ex qui dolores perferendis blanditiis debitis ducimus ut temporibus aut velit, incidunt ratione repellendus doloribus deleniti officia labore vitae nihil ullam. Quam soluta voluptate ipsum aperiam. Iste praesentium aspernatur aut similique accusantium hic accusamus deleniti eum nam numquam reiciendis itaque recusandae eaque incidunt velit sed necessitatibus nostrum sit, ',  
    image: 'https://give.do/blog/wp-content/uploads/2023/08/The-role-of-the-education-NGO-in-India-enthusiastic-children-beneficiaries-education-classroom-preview.jpg', // Placeholder image
  },
  {
    id: 2,
    heading: 'Heading Two',
    text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aspernatur voluptatum unde repudiandae quod itaque non ex qui dolores perferendis blanditiis debitis ducimus ut temporibus aut velit, incidunt ratione repellendus doloribus deleniti officia labore vitae nihil ullam. Quam soluta voluptate ipsum aperiam. Iste praesentium aspernatur aut similique accusantium hic accusamus deleniti eum nam numquam reiciendis itaque recusandae eaque incidunt velit sed necessitatibus nostrum sit, molestiae ',
    image: 'https://give.do/blog/wp-content/uploads/2023/11/5-NGOs-to-support-this-Childrens-Day-Give-blog.jpeg', // Placeholder image
  },
  //   {
  //     id: 3,
  //     heading: 'Heading Three',
  //     text: 'Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales.Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aspernatur voluptatum unde repudiandae quod itaque non ex qui dolores perferendis blanditiis debitis ducimus ut temporibus aut velit, incidunt ratione repellendus doloribus deleniti officia labore vitae nihil ullam. Quam soluta voluptate ipsum aperiam. Iste praesentium aspernatur aut similique accusantium hic accusamus deleniti eum nam numquam reiciendis itaque recusandae eaque incidunt velit sed necessitatibus nostrum sit, molestiae in rem! Maxime illum sint consectetur nisi, quasi, officia quam accusantium unde porro nihil tempora saepe eligendi beatae asperiores enim dicta rem placeat fugiat id. Doloribus, odit! Culpa ab commodi laboriosam facere exercitationem, debitis nobis.',
  //     image: 'https://via.placeholder.com/400x300', // Placeholder image
  //   },
];

function Body() {
  return (
    <div className="flex flex-col space-y-8 bg-gray-100">
      <h1 className="text-center font-medium text-5xl mt-6 p-5">About Us</h1>
      {content.map((section, index) => (
        <div
          key={section.id}
          className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-around`}
        >
          <div className="md:w-2/4 p-2">
            <h2 className="text-2xl font-bold mb-4 text-center">{section.heading}</h2>
            <p className="text-gray-600 leading-relaxed p-3">{section.text}</p>
          </div>
          <div className={`md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} p-2`}>
            <img
              src={section.image}
              alt={section.heading}
              className="w-full max-w-md h-auto object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Body;
