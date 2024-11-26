interface HonestCommentProps {
    comment: string;
  }
  
  export default function HonestComment({ comment }: HonestCommentProps) {
    return (
      <div className="mt-4 p-4 bg-gray-100 rounded-md relative">
        <h4 className="text-xs font-semibold text-gray-500 absolute top-2 left-2">Honest comment from me</h4>
        <p className="text-sm italic text-gray-700 mt-4">
          &quot;{comment}&quot;
        </p>
      </div>
    );
  }
  
  