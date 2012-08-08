var dummyQuestionSet = [
    {
        'song': 'spotify:track:0OzwLNVnzfG43IyQB2RMPH',
        'question': 'What was the name of the group Jim Kerr was in before Simply Minds?',
        'correct_answer': 1,
        'alternatives': {1: 'Johnny and the Self Abusers', 
						 2: 'The Regents', 
						 3: 'The Electric Force', 
						 4: 'The Stooges'}
    },
    {
        'song': 'spotify:track:4uOKFydzAejjSFqYbv1XPt',
        'question': 'How many members are there in UB40?',
        'correct_answer': 4,
        'alternatives': {1: '5',
 						 2: '7', 
						 3: '4', 
						 4: '10'}
    },
    {
        'song': 'spotify:track:4NH4xiPQ7TqNGqj6pZV4ki',
        'question': 'Culture Club won the Grammy for best new artist in 1984, who took home the award in 1985?',
        'correct_answer': 3,
        'alternatives': {1: 'Eurythmics', 
						 2: 'Corey Hart', 
						 3: 'Cyndi Lauper', 
						 4: 'Frankie Goes to Hollywood'}
    },
    {
        'song': 'spotify:track:5eKgyCFiu3j5BFpkbUCFwX',
        'question': 'Who is the guitar player and chief songwriter in the 1980s Synthpop band Spandau Ballet?',
        'correct_answer': 1,
        'alternatives': {1: 'Gary Kemp', 
						 2: 'Marc Almond', 
						 3: 'Dave Ball', 
						 4: 'Gene Pitney'}
    },
    {
        'song': 'spotify:track:1gb5sUe1CuRBuT8twq8uhw',
        'question': 'Who has been the lead singer of The Bangles?',
        'correct_answer': 3,
        'alternatives': {1: 'Vicki Peterson', 
						 2: 'Annette Zilinskas', 
						 3: 'Suzanna Hoffs', 
						 4: 'Debbi Peterson'}
    },
    {
        'song': 'spotify:track:1bcklQyAGzDxQiNMczMLt6',
        'question': 'Which year where the single Pour Some Sugar On Me with Def Leppard released?',
        'correct_answer': 1,
        'alternatives': {1: '1988', 
						 2: '1984', 
						 3: '1989', 
						 4: '1986'}
    },
    {
        'song': 'spotify:track:6AUYnTv5LXbWm2oHxN3QAw',
        'question': 'The lead singer Mark Knopfler have been member of anohter band, which?',
        'correct_answer': 3,
        'alternatives': {1: 'Jellyfish', 
						 2: 'Supertramp', 
						 3: 'The Notting Hillbillies', 
						 4: 'The Smithereens'}
    },
    {
        'song': 'spotify:track:6EoAUmLaog9mUTMDtdVudr',
        'question': 'Which Debbie Gibson single spent the most time at the top of the charts?',
        'correct_answer': 2,
        'alternatives': {1: 'Only In My Dreams', 
						 2: 'Foolish Beat', 
						 3: 'Shake Your Love', 
						 4: 'Lost In Your Eyes'}
    },
    {
        'song': 'spotify:track:2qeESyQyH7MRHCBotCQsNq',
        'question': 'Where was the video shot for the Duran Duran song "Hungry Like The Wolf"?',
        'correct_answer': 3,
        'alternatives': {1: 'Boreno', 
						 2: 'India', 
						 3: 'Sri Lanka', 
						 4: 'Thailand'}
    },
    {
        'song': 'spotify:track:0Z7O8GMQShj9TJrm2yX1R6',
        'question': 'What famous hit song from the 80s did Eddie Van Halen play lead guitar on?',
        'correct_answer': 1,
        'alternatives': {1: 'Beat It', 
						 2: 'Dirty Diana', 
						 3: 'Talk Dirty to Me', 
						 4: 'Here I Go Again'}
    }
]

exports.quizzes = [
    {'id': 1, 'name': '80s',  'image': 'sp://ziuq/images/genrebox_80s.png'},
    {'id': 2, 'name': '90s',  'image': 'sp://ziuq/images/genrebox_90s.png'},
    {'id': 3, 'name': 'pop',  'image': 'sp://ziuq/images/genrebox_pop.png'},
    {'id': 4, 'name': 'rock', 'image': 'sp://ziuq/images/genrebox_rock.png'}
]

exports.questions = {
    1: dummyQuestionSet,
    2: dummyQuestionSet,
    3: dummyQuestionSet,
    4: dummyQuestionSet
}

