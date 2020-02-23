[x] use postgres
[x] check out micahs sinatrabook by enoch
[] set up devise gem for users
[] think of a damn idea!!!!!
[] set up models
[] use websockets (socket.io)

LFG Collab

# User

has_many :user_projects
has_many :projects, through: :user_projcts
:name, :email, :password, :location

Project ()
:Topic,
