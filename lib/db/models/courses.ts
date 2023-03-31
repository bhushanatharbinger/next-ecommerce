class Vote {
    value: number;
    count: number;
}
class Punctuation {
    countOpinions: number;
    punctuation: number;
    votes: Vote[]
}
class Reviews {
    name: string;
    avatar: string;
    description: string;
    punctuation: number
}
class Course {
    id: string;
    name: string;
    price: number;
    discount: number;
    category: string;
    currentPrice: number;
    tags: string[];
    images: string[];
    punctuation:Punctuation;
    reviews: Reviews[];
}

