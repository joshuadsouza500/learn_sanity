import { getReviews } from "@/sanity/sanity.query";
import { User } from "lucide-react";

const Reviews = async () => {
  const reviews = await getReviews();
  return (
    <section
      id="reviews"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-900"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Client Reviews
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              {`     Don't just take our word for it. Here's what our clients have to say.`}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm"
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="rounded-full  border-2 border-red-600 size-10 md:size-14 flex items-center justify-center">
                  <User className="" />{" "}
                </div>
                <div className="text-center">
                  <h3 className="font-bold">{review.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {review.company}
                  </p>
                </div>
              </div>
              <p className="text-center text-muted-foreground">
                {review.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
