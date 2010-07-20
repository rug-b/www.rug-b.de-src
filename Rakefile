desc 'Build and publish the site to rug-b.github.com'
task :publish do
  if `git status` =~ /working directory clean/
    begin
      cwd = `pwd`.chomp
      current_commit = `git log | head -1 | sed -e 's/^commit //'`
      system <<-CMD
staticmatic build . &&
mkdir -p tmp &&
rm -rf tmp/* &&
cd tmp &&
git clone git@github.com:rug-b/rug-b.github.com.git &&
cp -r ../site/* rug-b.github.com &&
cd rug-b.github.com &&
git add * &&
git commit -a -m 'built from source repo www.rug-b.de at #{current_commit}' &&
git push
      CMD
    ensure
      system <<-CMD
cd '#{cwd}' &&
rm -rf tmp
      CMD
    end
  else
    STDERR.puts "Your working directory is not clean. Please commit local modifications before publishing."
  end
end
