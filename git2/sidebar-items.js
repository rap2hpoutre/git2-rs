initSidebarItems({"constant":[["ADD_CHECK_PATHSPEC",""],["ADD_DEFAULT",""],["ADD_DISABLE_PATHSPEC_MATCH",""],["ADD_FORCE",""],["CHECKOUT_NOTIFICATION_CONFLICT","Notification about a conflict."],["CHECKOUT_NOTIFICATION_DIRTY","Notification about a dirty file."],["CHECKOUT_NOTIFICATION_IGNORED","Notification about an ignored file."],["CHECKOUT_NOTIFICATION_UNTRACKED","Notification about an untracked file."],["CHECKOUT_NOTIFICATION_UPDATED","Notification about an updated file."],["DEFAULT",""],["DEFAULT_COMMENT_CHAR","The default comment character for message_prettify ('#')"],["DIFF_STATS_FULL","Equivalent of `--stat` in git"],["DIFF_STATS_INCLUDE_SUMMARY","Extended header information such as creations, renames and mode changes, equivalent of `--summary` in git"],["DIFF_STATS_NONE","Don't generate any stats"],["DIFF_STATS_NUMBER","Equivalent of `--numstat` in git"],["DIFF_STATS_SHORT","Equivalent of `--shortstat` in git"],["IDXENTRY_ADDED",""],["IDXENTRY_CONFLICTED",""],["IDXENTRY_EXTENDED","Set when the `extended_flags` field is valid."],["IDXENTRY_EXTENDED2","Reserved for a future on-disk extended flag"],["IDXENTRY_HASHED",""],["IDXENTRY_INTENT_TO_ADD","An \"intent to add\" entry from \"git add -N\""],["IDXENTRY_NEW_SKIP_WORKTREE",""],["IDXENTRY_REMOVE",""],["IDXENTRY_SKIP_WORKTREE","Skip the associated worktree file, for sparse checkouts"],["IDXENTRY_UNHASHED",""],["IDXENTRY_UNPACKED",""],["IDXENTRY_UPDATE",""],["IDXENTRY_UPTODATE",""],["IDXENTRY_VALID","\"Assume valid\" flag"],["IDXENTRY_WT_REMOVE",""],["PATHSPEC_DEFAULT","Use the default pathspec matching configuration."],["PATHSPEC_FAILURES_ONLY","Means that the list returned does not need to keep the actual matching filenames. Use this to just test if there were any matches at all or in combination with `PATHSPEC_FAILURES` to validate a pathspec."],["PATHSPEC_FIND_FAILURES","Means that the list returned should track which patterns matched which files so that at the end of the match we can identify patterns that did not match any files."],["PATHSPEC_IGNORE_CASE","Force matching to ignore case, otherwise matching will use native case sensitivity fo the platform filesystem."],["PATHSPEC_NO_GLOB","Disable glob patterns and just use simple string comparison for matching."],["PATHSPEC_NO_MATCH_ERROR","Means that match functions return the error code `NotFound` if no matches are found. By default no matches is a success."],["PATHSPEC_USE_CASE","Force case sensitive matches, otherwise match will use the native case sensitivity of the platform filesystem."],["REPOSITORY_INIT_SHARED_ALL","Use `--shared=all` behavior, adding world readability."],["REPOSITORY_INIT_SHARED_GROUP","Use `--shared=group` behavior, chmod'ing the new repo to be group writable and \"g+sx\" for sticky group assignment"],["REPOSITORY_INIT_SHARED_UMASK","Use permissions configured by umask - the default"],["REPOSITORY_OPEN_BARE","Force opening as bare repository, and defer loading its config."],["REPOSITORY_OPEN_CROSS_FS","Search across filesystem boundaries."],["REPOSITORY_OPEN_NO_SEARCH","Only open the specified path; don't walk upward searching."],["REVPARSE_MERGE_BASE","The spec used the `...` operator, which invokes special semantics."],["REVPARSE_RANGE","The spec targeted a range of commits"],["REVPARSE_SINGLE","The spec targeted a single object"],["SORT_NONE","Sort the repository contents in no particular ordering."],["SORT_REVERSE","Iterate through the repository contents in reverse order."],["SORT_TIME","Sort the repository contents by commit time."],["SORT_TOPOLOGICAL","Sort the repository contents in topological order (parents before children)."],["SSH_CUSTOM",""],["SSH_INTERACTIVE",""],["SSH_KEY",""],["SSH_MEMORY",""],["STATUS_CONFLICTED",""],["STATUS_CURRENT",""],["STATUS_IGNORED",""],["STATUS_INDEX_DELETED",""],["STATUS_INDEX_MODIFIED",""],["STATUS_INDEX_NEW",""],["STATUS_INDEX_RENAMED",""],["STATUS_INDEX_TYPECHANGE",""],["STATUS_WT_DELETED",""],["STATUS_WT_MODIFIED",""],["STATUS_WT_NEW",""],["STATUS_WT_RENAMED",""],["STATUS_WT_TYPECHANGE",""],["SUBMODULE_STATUS_INDEX_ADDED",""],["SUBMODULE_STATUS_INDEX_DELETED",""],["SUBMODULE_STATUS_INDEX_MODIFIED",""],["SUBMODULE_STATUS_IN_CONFIG",""],["SUBMODULE_STATUS_IN_HEAD",""],["SUBMODULE_STATUS_IN_INDEX",""],["SUBMODULE_STATUS_IN_WD",""],["SUBMODULE_STATUS_WD_ADDED",""],["SUBMODULE_STATUS_WD_DELETED",""],["SUBMODULE_STATUS_WD_INDEX_MODIFIED",""],["SUBMODULE_STATUS_WD_MODIFIED",""],["SUBMODULE_STATUS_WD_UNINITIALIZED",""],["SUBMODULE_STATUS_WD_UNTRACKED",""],["SUBMODULE_STATUS_WD_WD_MODIFIED",""],["USERNAME",""],["USER_PASS_PLAINTEXT",""]],"enum":[["AutotagOption","Automatic tag following options."],["BranchType","An enumeration for the possible types of branches"],["ConfigLevel","An enumeration of the possible priority levels of a config file."],["Delta","What type of change is described by a `DiffDelta`?"],["DiffBinaryKind","When producing a binary diff, the binary data returned will be either the deflated full (\"literal\") contents of the file, or the deflated binary delta between the two sides (whichever is smaller)."],["DiffFormat","Possible output formats for diff data"],["Direction","An enumeration of the possible directions for a remote."],["ErrorClass","An enumeration of possible categories of things that can have errors when working with a git repository."],["ErrorCode","An enumeration of possible errors that can happen when working with a git repository."],["FetchPrune","Configuration for how pruning is done on a fetch"],["FileFavor","Merge file favor options for `MergeOptions` instruct the file-level merging functionality how to deal with conflicting regions of the files."],["ObjectType","An enumeration all possible kinds objects may have."],["PackBuilderStage","Stages that are reported by the PackBuilder progress callback."],["RepositoryState","A listing of the possible states that a repository can be in."],["ResetType","An enumeration of the operations that can be performed for the `reset` method on a `Repository`."],["StatusShow","Enumeration of possible methods of what can be shown through a status operation."],["SubmoduleIgnore","Submodule ignore values"]],"fn":[["message_prettify","Clean up a message, removing extraneous whitespace, and ensure that the message ends with a newline. If comment_char is Some, also remove comment lines starting with that character."]],"mod":[["build","Builder-pattern objects for configuration various git operations."],["cert","Certificate types which are passed to `CertificateCheck` in `RemoteCallbacks`."],["oid_array","Bindings to libgit2's raw git_strarray type"],["string_array","Bindings to libgit2's raw git_strarray type"],["transport","Interfaces for adding custom transports to libgit2"]],"struct":[["AnnotatedCommit","A structure to represent an annotated commit, the input to merge and rebase."],["Blame","Opaque structure to hold blame results."],["BlameHunk","Structure that represents a blame hunk."],["BlameIter","An iterator over the hunks in a blame."],["BlameOptions","Blame options"],["Blob","A structure to represent a git [blob][1]"],["Branch","A structure to represent a git [branch][1]"],["Branches","An iterator over the branches inside of a repository."],["Buf","A structure to wrap an intermediate buffer used by libgit2."],["CheckoutNotificationType","Types of notifications emitted from checkouts."],["Commit","A structure to represent a git [commit][1]"],["Config","A structure representing a git configuration key/value store"],["ConfigEntries","An iterator over the `ConfigEntry` values of a `Config` structure."],["ConfigEntry","A struct representing a certain entry owned by a `Config` instance."],["Cred","A structure to represent git credentials in libgit2."],["CredentialHelper","Management of the gitcredentials(7) interface."],["CredentialType","Types of credentials that can be requested by a credential callback."],["Deltas","An iterator over the diffs in a delta"],["Describe","The result of a `describe` operation on either an `Describe` or a `Repository`."],["DescribeFormatOptions","Options which can be used to customize how a description is formatted."],["DescribeOptions","Options which indicate how a `Describe` is created."],["Diff","The diff object that contains all individual file deltas."],["DiffBinary","Structure describing the binary contents of a diff."],["DiffBinaryFile","The contents of one of the files in a binary diff."],["DiffDelta","Description of changes to one entry."],["DiffFile","Description of one side of a delta."],["DiffFindOptions","Control behavior of rename and copy detection"],["DiffHunk","Structure describing a hunk of a diff."],["DiffLine","Structure describing a line (or data span) of a diff."],["DiffOptions","Structure describing options about how the diff should be executed."],["DiffStats","Structure describing a hunk of a diff."],["DiffStatsFormat","Formatting options for diff stats"],["Error","A structure to represent errors coming out of libgit2."],["FetchOptions","Options which can be specified to various fetch operations."],["Index","A structure to represent a git [index][1]"],["IndexAddOption","Flags for APIs that add files matching pathspec"],["IndexEntries","An iterator over the entries in an index"],["IndexEntry","A structure to represent an entry or a file inside of an index."],["IndexEntryExtendedFlag","Flags for the `extended_flags` field of an IndexEntry."],["IndexEntryFlag","Flags for the `flags` field of an IndexEntry."],["IndexTime","Time structure used in a git index entry."],["MergeOptions","Options to specify when merging."],["Note","A structure representing a [note][note] in git."],["Notes","An iterator over all of the notes within a repository."],["Object","A structure to represent a git [object][1]"],["Oid","Unique identity of any object (commit, tree, blob, tag)."],["PackBuilder","A builder for creating a packfile"],["Parents","An iterator over the parent commits of a commit."],["Pathspec","Structure representing a compiled pathspec used for matching against various structures."],["PathspecDiffEntries","Iterator over the matching diff deltas."],["PathspecEntries","Iterator over the matched paths in a pathspec."],["PathspecFailedEntries","Iterator over the failed list of pathspec items that did not match."],["PathspecFlags","..."],["PathspecMatchList","List of filenames matching a pathspec."],["Progress","Struct representing the progress by an in-flight transfer."],["ProxyOptions","Options which can be specified to various fetch operations."],["PushOptions","Options to control the behavior of a git push."],["Reference","A structure to represent a git [reference][1]."],["ReferenceNames","An iterator over the names of references in a repository."],["References","An iterator over the references in a repository."],["Reflog","A reference log of a git repository."],["ReflogEntry","An entry inside the reflog of a repository"],["ReflogIter","An iterator over the entries inside of a reflog."],["Refspec","A structure to represent a git [refspec][1]."],["Refspecs","An iterator over the refspecs that a remote contains."],["Remote","A structure representing a [remote][1] of a git repository."],["RemoteCallbacks","A structure to contain the callbacks which are invoked when a repository is being updated or downloaded."],["RemoteHead","Description of a reference advertised bya remote server, given out on calls to `list`."],["Repository","An owned git repository, representing all state associated with the underlying filesystem."],["RepositoryInitMode","Mode options for RepositoryInitOptions"],["RepositoryInitOptions","Options which can be used to configure how a repository is initialized"],["RepositoryOpenFlags","Flags for `Repository::open_ext`"],["RevparseMode","Flags for the return value of `Repository::revparse`"],["Revspec","A revspec represents a range of revisions within a repository."],["Revwalk","A revwalk allows traversal of the commit graph defined by including one or more leaves and excluding one or more roots."],["Signature","A Signature is used to indicate authorship of various actions throughout the library."],["Sort","Orderings that may be specified for Revwalk iteration."],["Status","Status flags for a single file"],["StatusEntry","A structure representing an entry in the `Statuses` structure."],["StatusIter","An iterator over the statuses in a `Statuses` instance."],["StatusOptions","Options that can be provided to `repo.statuses()` to control how the status information is gathered."],["Statuses","A container for a list of status information about a repository."],["Submodule","A structure to represent a git [submodule][1]"],["SubmoduleStatus","Return codes for submodule status."],["Tag","A structure to represent a git [tag][1]"],["Time","Time in a signature"],["Tree","A structure to represent a git [tree][1]"],["TreeBuilder","Constructor for in-memory trees"],["TreeEntry","A structure representing an entry inside of a tree. An entry is borrowed from a tree."],["TreeIter","An iterator over the entries in a tree."]],"trait":[["IntoCString","A class of types that can be converted to C strings."]],"type":[["Credentials","Callback used to acquire credentials for when a remote is fetched."],["IndexMatchedPath","A callback function to filter index matches."],["TransferProgress","Callback to be invoked while a transfer is in progress."],["TransportMessage","Callback for receiving messages delivered by the transport."],["UpdateTips","Callback for whenever a reference is updated locally."]]});