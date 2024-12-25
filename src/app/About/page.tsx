"use client";
import { useState } from 'react';

const AboutUs = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState<string>('');

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  const handleDeleteComment = (index: number) => {
    const newComments = comments.filter((_, i) => i !== index);
    setComments(newComments);
  };

  return (
    <main className="font-sans bg-white text-gray-900">

      <header className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-5 bg-blue-900" style={{ backgroundImage: 'url(about.jpg)' }}>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">About Us</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-5 text-white">
          Discover the legacy of precision craftsmanship and timeless elegance in every watch we create.
        </p>
      </header>

      <section className="py-20 px-5 md:px-20 bg-white text-gray-900">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">Who I Am</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-blue-300 mb-3">Education</h3>
            <p className="text-gray-300">O-Level from Karachi Pakistan at the age of 16. Continuously learning through the Governor IT Initiative.</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-blue-300 mb-3">Achievements</h3>
            <p className="text-gray-300">Recipient of the Governor IT Initiative empowering young talent with technical skills.</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-blue-300 mb-3">Personal Info</h3>
            <p className="text-gray-300">My name is Ahmed. Im passionate about technology programming and creating innovative solutions.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-20 bg-gray-100 text-gray-900">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">Meet My Team</h2>
        <div className="flex justify-center space-x-10">
          <div className="text-center">
            <img src="/man.jpg" alt="Team Member" className="w-32 h-32 rounded-full mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-300">John Doe</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="text-center">
            <img src="/women.jpg" alt="Team Member" className="w-32 h-32 rounded-full mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-300">Jane Smith</h3>
            <p className="text-gray-600">Head of Product Design</p>
          </div>
          <div className="text-center">
            <img src="/women2.jpg" alt="Team Member" className="w-32 h-32 rounded-full mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-300">Michael Brown</h3>
            <p className="text-gray-600">Marketing Director</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-20 bg-white text-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-10 text-blue-300">Leave a Comment</h2>
        <div className="max-w-lg mx-auto">
          <input
            type="text"
            className="w-full p-3 rounded-lg border border-gray-300 mb-5"
            placeholder="Write your comment here..."
            value={comment}
            onChange={handleCommentChange}
          />
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Add Comment
          </button>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-center mb-5 text-blue-300">Comments</h3>
          <div className="space-y-4">
            {comments.map((comment, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg">
                <p className="text-lg">{comment}</p>
                <button
                  onClick={() => handleDeleteComment(index)}
                  className="text-red-500 mt-2 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default AboutUs;
