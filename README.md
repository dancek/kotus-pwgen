# kotus-pwgen

Password generators that use the words from `kotus_sanat.txt`.

Someone told me that a password consisting of three dictionary words is more secure than one with eight alphanumeric characters. Well, depends on the size of the dictionary, right? Someone else pointed out that [`kotus_sanat.txt`](http://linja-aho.blogspot.fi/2010/08/suomen-kielen-sanalista.html) consists of 97k words, ie. 16.5 bits of entropy per word. That's great!

Of course, no one has an active vocabulary of a hundred thousand words, so I went on to generate a couple of passwords from the dictionary.

```
$ shuf -n 3 kotus_sanat.txt
paperikanta
pulsaattoripesukone
kenttäposti
```

Right.

To share the fun, I wrote a simple web version of the generator.

Then I wrote another version as a self-contained shell script, as I had always been fascinated by self-extracting archives run with `/bin/sh`. `kotus-pwgen.sh` uses the same technique. It's much worse than [shuf](https://www.gnu.org/software/coreutils/manual/html_node/shuf-invocation.html), but hey, not everyone has GNU coreutils.