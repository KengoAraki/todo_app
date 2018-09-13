3.times { Task.create!(name: 'Simple Task') }
2.times { Task.create!(name: 'Simple Task', is_done: true) }
